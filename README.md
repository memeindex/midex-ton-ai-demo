Midex — TON + AI demo (sanitized)

Purpose
- Minimal, self-contained demo that shows the TON + AI workflow (canvas → agent → TON MCP → on‑chain action).
- Safe for public sharing: no secrets, no DB dumps, no external network references.

Included
- `flow/diagram.mmd` — Mermaid flow diagram for the canvas/agent flow.
- `examples/ton_mcp_example.py` — minimal example (placeholders) showing how a workflow can trigger an on‑chain action via TON MCP.
- `examples/ai_agent_example.py` — pseudo example of AI agent analysis producing an action.
- `env.example` — sanitized environment template (placeholders only).
- `docs/usage.md` — quick run & demo steps.

How to use
1. Review `env.example` and fill placeholders with your own test keys (do NOT commit secrets).
2. Browse `flow/diagram.mmd` to understand the canvas flow.
3. Run examples locally (they are illustrative and use placeholders):

```bash
python3 examples/ai_agent_example.py
python3 examples/ton_mcp_example.py
```

Quick demo (TL;DR for judges)
- What to show in 60s: open `frontend/index.html` in a browser, create one canvas node, trigger the AI analysis (click/run) and show the generated action; then run `demo.sh` to produce `demo_output.json` containing the simulated on-chain payload and response.

Run the bundled demo script:

```bash
bash demo.sh
```

Output: `demo_output.json` — contains `ai_agent` and `ton_mcp` simulated JSON outputs.

Next steps

