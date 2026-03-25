# Midex — TON + AI demo (sanitized)

> Minimal, self-contained demo that shows the TON + AI workflow: canvas → agent → TON MCP → on‑chain action.  
> Safe for public sharing — no secrets, no DB dumps, no external network references.

---

## Purpose
- **Goal:** Demonstrate end‑to‑end TON + AI flow (visual canvas → AI agent → MCP → simulated on‑chain action).
- **Safety:** Demo contains only placeholders and sanitized env; do not commit real secrets.

---

## Included
- Diagram: flow/diagram.mmd — Mermaid flow for canvas → agent → MCP → on‑chain  
- AI example: examples/ai_agent_example.py — illustrative AI agent output (placeholders)  
- TON example: examples/ton_mcp_example.py — illustrative MCP → on‑chain payload (placeholders)  
- Env template: env.example — sanitized environment template (placeholders only)  
- Docs: docs/usage.md — quick run & demo steps  
- Frontend: frontend/index.html — lightweight visual canvas simulator  
- Demo runner: demo.sh — runs examples and merges outputs into `demo_output.json`

---

## Quick start
1. Copy `env.example` → .env and fill with test values (do **NOT** commit secrets).  
2. Inspect the flow diagram: flow/diagram.mmd.  
3. Run illustrative examples:
```bash
python3 examples/ai_agent_example.py
python3 examples/ton_mcp_example.py
```
4. Run the bundled demo:
```bash
bash demo.sh
```
Output: `demo_output.json` — contains simulated `ai_agent` and `ton_mcp` JSON outputs.

---

## Frontend demo (TL;DR for judges)
- Open frontend/index.html in a browser.  
- Create a canvas node, click **Run AI** → show generated action.  
- Run `bash demo.sh` and display `demo_output.json` (simulated on‑chain payload + AI output).  
(60s demo script: build node → run AI → show output → run demo script → show JSON.)

---

## What is Midex AI
Full‑stack TON + AI platform for autonomous trading and analytics agents — wallets, orchestration, payments, visual flows and agent coordination.

---

## Value
Launch AI agents that analyze, coordinate and execute on‑chain actions with built‑in cost control and auditability.

---

## Key features
- Custodial + non‑custodial wallet flows  
- Vault‑backed key storage for custody operations  
- On‑chain payments & atomic‑swap abstractions  
- MCP‑compatible agent manager (agent orchestration & messaging)  
- Visual flow / node builder (data → transform → agent → execution)  
- Telegram control for running flows and receiving alerts

---

## Integrations & realtime
TonAPI / TONcenter / oracles / external APIs, plus SSE / webhooks for real‑time updates.

---

## Reliability & ops
- Async orchestration: Celery + `beat`, DLQ and retry policies  
- Storage: PostgreSQL (source of truth), Redis (cache/state)  
- Observability: centralized logs, metrics, cost monitoring

---

## Security note
Demo repository is sanitized. For production, keys and secrets must be stored in `Vault` and all sensitive operations require user confirmation.
