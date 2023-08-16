#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_ENV" == "production" ]] && [[ "$VERCEL_GIT_COMMIT_REF" == "vercel" ]]; then
  # Proceed with the build for the "vercel" branch (production)
  echo "✅ - Build can proceed"
  exit 1;

elif [[ "$VERCEL_ENV" == "preview" ]]; then
  # Don't build for preview branches
  echo "🛑 - Build cancelled for preview branch"
  exit 0;

else
  # Proceed with the build for other branches (not production or preview)
  echo "✅ - Build can proceed for branch: $VERCEL_GIT_COMMIT_REF"
  exit 1;
fi
