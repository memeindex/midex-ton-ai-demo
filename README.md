Midex — TON + AI demo (sanitized)

Purpose:

Goal: Minimal, self-contained demo that shows the TON + AI workflow: canvas → agent → TON MCP → on‑chain action.
Safety: Safe for public sharing — no secrets, no DB dumps, no external network references.

Included:

Diagram: flow/diagram.mmd — mermaid flow for canvas → agent → MCP → on‑chain.
AI example: examples/ai_agent_example.py — illustrative AI agent output (placeholders).
TON example: examples/ton_mcp_example.py — illustrative MCP → on‑chain payload (placeholders).
Env template: env.example — sanitized environment template (placeholders only).
Docs: docs/usage.md — quick run & demo steps.
Frontend: frontend/index.html — lightweight visual canvas simulator.
Demo runner: demo.sh — runs examples and merges outputs into demo_output.json.
How to use:

Prepare: Copy env.example → .env and fill with test values (do NOT commit secrets).
Explore: Open flow/diagram.mmd to understand the canvas → agent → MCP flow.
Run examples (illustrative):
python3 examples/ai_agent_example.py
python3 examples/ton_mcp_example.py
Frontend demo: open frontend/index.html in a browser, create one canvas node, click Run AI to show simulated outputs.
Quick demo (TL;DR for judges):

60s script: open frontend/index.html, create a node, trigger AI (Run), show generated action; then run bash demo.sh and display demo_output.json (simulated on‑chain payload + AI output).
Run the bundled demo:

bash demo.sh
Output: demo_output.json — contains ai_agent and ton_mcp simulated JSON outputs.

What is Midex AI

Full‑stack TON + AI platform for autonomous trading and analytics agents (wallets, orchestration, payments).

Value: Launch AI agents that analyze, coordinate and execute on‑chain actions with built‑in cost control.

Key features: custody + non‑custody wallets, Vault‑backed keys, on‑chain payments & atomic‑swap abstractions, MCP‑compatible agent manager, visual flow/node builder, Telegram control.

Integrations: TonAPI / TONcenter / oracles / external APIs, SSE/webhooks for real‑time.

Midex AI
