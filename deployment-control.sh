#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_ENV" == "production" ]] && [[ "$VERCEL_GIT_COMMIT_REF" == "vercel" ]]; then
  # Proceed with the build for the "vercel" branch (production)
  echo "✅ - Build can proceed"
  exit 1;

elif [[ "$VERCEL_ENV" == "preview" ]]; then
  # Proceed with the build for any preview branch
  echo "✅ - Build can proceed for preview branch"
  exit 1;

else
  # Don't build for other branches
  echo "🛑 - Build cancelled for branch: $VERCEL_GIT_COMMIT_REF"
  exit 0;
fi
