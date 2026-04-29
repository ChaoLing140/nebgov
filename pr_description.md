Closes #196

This PR implements a slashing mechanism for treasury signers who act maliciously.

### Changes
- Added `slash_signer` and `unslash_signer` functions (governance-gated).
- Added slashing history tracking for each signer.
- Automatic threshold adjustment when a signer is slashed.
- Refactored `submit` to `submit_internal` to avoid redundant `require_auth` calls.
- Fixed existing treasury tests to comply with Soroban SDK 22.x storage access and initialization requirements.

### Verification
- Added comprehensive unit tests for slashing and unslashing flows.
- Verified all 19 tests pass in the `sorogov-treasury` package.
