"""
Minimal TON MCP example (sanitized). This script demonstrates the shape of interaction
between a workflow and a TON MCP submitter. It uses placeholders and does NOT send real txs.
"""

import json


def build_onchain_payload(action: dict) -> dict:
    # Convert recommended action into a payload suitable for a MCP submission
    payload = {
        "type": action.get("type"),
        "params": action,
        "note": "Demo payload - do NOT use in production"
    }
    return payload


def simulate_send_to_mcp(payload: dict) -> dict:
    # In production this would sign and submit using TON keys and MCP endpoints.
    # Here we only simulate a response.
    return {
        "status": "simulated",
        "tx_hash": "0xDEADBEEF_SIMULATED",
        "payload": payload
    }


if __name__ == "__main__":
    # Example: agent decided to swap
    action = {"type": "swap", "from": "TON", "to": "USDT", "amount": "10"}
    payload = build_onchain_payload(action)
    resp = simulate_send_to_mcp(payload)
    print(json.dumps(resp, indent=2))
