#!/bin/bash
# Builds Check-list SMUR APK without Gradle: aapt -> javac -> dx -> zipalign -> apksigner
set -e
cd "$(dirname "$0")"
SDK=/usr/lib/android-sdk/platforms/android-23/android.jar
rm -rf out && mkdir -p out/gen out/classes

python3 - <<'EOF'
t=open('template.html').read()
t=t.replace('/*STYLE*/',open('style.css').read()).replace('/*SECTIONS*/',open('sections_umh.js').read()+"\n"+(open('sections_vl.js').read() if __import__('os').path.exists('sections_vl.js') else ''))
open('assets/index.html','w').write(t)
EOF

aapt package -f -m -J out/gen -M AndroidManifest.xml -S res -I "$SDK"
javac -nowarn -Xlint:-options -source 8 -target 8 -bootclasspath "$SDK" -d out/classes \
  src/fr/smur/checklist/*.java out/gen/fr/smur/checklist/R.java
dalvik-exchange --dex --output=out/classes.dex out/classes
aapt package -f -M AndroidManifest.xml -S res -A assets -I "$SDK" -F out/unsigned.apk
(cd out && aapt add unsigned.apk classes.dex >/dev/null)
zipalign -f 4 out/unsigned.apk out/aligned.apk

[ -f smur.keystore ] || keytool -genkeypair -keystore smur.keystore -alias smur -keyalg RSA -keysize 2048 \
  -validity 10000 -storepass ${KS_PASS:-smurpass} -keypass ${KS_PASS:-smurpass} -dname "CN=Check-list SMUR" 2>/dev/null
apksigner sign --ks smur.keystore --ks-pass pass:${KS_PASS:-smurpass} --key-pass pass:${KS_PASS:-smurpass} --out out/check-list-smur.apk out/aligned.apk
apksigner verify out/check-list-smur.apk && ls -la out/check-list-smur.apk
