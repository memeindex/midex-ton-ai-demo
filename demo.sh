#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Starting demo (static server + examples)..."

# Start simple static server in background
python3 -m http.server 8000 > /dev/null 2>&1 &
SRV_PID=$!
sleep 0.3

# Run examples and capture their JSON outputs (examples print JSON)
AI_OUTPUT=$(python3 examples/ai_agent_example.py 2>/dev/null || echo '"error"')
TON_OUTPUT=$(python3 examples/ton_mcp_example.py 2>/dev/null || echo '"error"')

# Write merged output
cat > demo_output.json <<EOF
{
  "timestamp": "$(date --iso-8601=seconds)",
  "ai_agent": $AI_OUTPUT,
  "ton_mcp": $TON_OUTPUT
}
EOF

# Stop server
kill "$SRV_PID" >/dev/null 2>&1 || true
wait "$SRV_PID" 2>/dev/null || true

echo "Demo complete — demo_output.json created."
