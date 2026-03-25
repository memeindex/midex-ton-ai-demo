Usage
-----

This demo is illustrative. It shows a small canvas→AI→TON flow.

1. Open `flow/diagram.mmd` to view the workflow diagram (Mermaid).
2. Edit `env.example` locally and set any test endpoints/keys you need (do NOT add real secrets to the repo).
3. Run the AI example to see a mock decision:

```bash
python3 examples/ai_agent_example.py
```

4. Run the TON MCP example to see a simulated submission:

```bash
python3 examples/ton_mcp_example.py
```

What this demo contains
- High level flow for a canvas/agent based workflow.
- Minimal examples showing how an AI agent can produce structured actions and how those actions are prepared for on‑chain submission.

If you want, I can:
- Add a README walkthrough with screenshots.
- Initialize a new Git repo and push these files (no history).
- Expand examples to include a small JS frontend mock for the canvas.
