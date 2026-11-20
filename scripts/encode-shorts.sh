#!/usr/bin/env bash
# Encode vertical shorts for the Our Work "content sea".
# Usage: scripts/encode-shorts.sh <slug> <source> [start-seconds] [length-seconds] [crop]
#   Produces public/work/shorts/<slug>-loop.mp4  (silent 8s loop, 480x854, for inline autoplay)
#            public/work/shorts/<slug>.mp4       (full clip with audio, 720x1280, for the lightbox)
#            public/work/shorts/<slug>.jpg       (poster frame)
#   crop: optional ffmpeg crop filter for 16:9 sources, e.g. "crop=ih*9/16:ih:(iw-ih*9/16)/2:0"
set -euo pipefail
slug="$1"; src="$2"; start="${3:-0}"; len="${4:-}"; crop="${5:-}"
out="$(cd "$(dirname "$0")/.." && pwd)/public/work/shorts"
mkdir -p "$out"
pre="${crop:+$crop,}"
dur=(); [ -n "$len" ] && dur=(-t "$len")
ffmpeg -v error -y -ss "$start" -i "$src" ${dur[@]+"${dur[@]}"} -vf "${pre}scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,fps=30" \
  -c:v libx264 -preset slow -crf 27 -profile:v high -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "$out/$slug.mp4"
ffmpeg -v error -y -ss "$start" -i "$src" -t 8 -vf "${pre}scale=480:854:force_original_aspect_ratio=increase,crop=480:854,fps=30" \
  -an -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p -movflags +faststart "$out/$slug-loop.mp4"
ffmpeg -v error -y -ss "$start" -i "$src" -ss 1.5 -frames:v 1 -vf "${pre}scale=480:854:force_original_aspect_ratio=increase,crop=480:854" -q:v 4 "$out/$slug.jpg"
echo "encoded $slug"
