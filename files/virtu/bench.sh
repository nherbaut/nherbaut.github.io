#!/bin/sh
# bench.sh : micro-bench CPU + I/O (résultat en secondes)

set -eu

ts() { date +%s.%N; }

echo "=== BENCH $(uname -a) ==="

# 1) CPU pur (arithmétique)
t0=$(ts)
i=0
x=0
while [ "$i" -lt 500000 ]; do
  x=$((x + i))
  i=$((i + 1))
done
t1=$(ts)
echo "CPU_LOOP_SEC=$(awk "BEGIN{print $t1-$t0}")"

# 2) Débit disque (écriture + flush)
t0=$(ts)
dd if=/dev/zero of=/tmp/bench.bin bs=1M count=64 conv=fdatasync >/dev/null 2>&1
t1=$(ts)
echo "DISK_WRITE_256MB_SEC=$(awk "BEGIN{print $t1-$t0}")"
rm -f /tmp/bench.bin

# 3) Compression (CPU + mémoire)
t0=$(ts)
dd if=/dev/zero bs=1M count=256 2>/dev/null | gzip -1 >/dev/null
t1=$(ts)
echo "GZIP_256MB_SEC=$(awk "BEGIN{print $t1-$t0}")"

echo "=== END ==="

