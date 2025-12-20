# Troubleshooting Guide

## TypeScript Path Alias Errors in VS Code

If you see errors like "Cannot find module '@/components/...'", these are false positives from the VS Code TypeScript language server. The project compiles correctly.

### Solution:

1. **Restart TypeScript Server** in VS Code:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "TypeScript: Restart TS Server"
   - Press Enter

2. **Or reload VS Code window**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Developer: Reload Window"
   - Press Enter

3. **Verify build works**:
   ```bash
   pnpm type-check
   pnpm build
   ```

Both commands should complete without errors.

## CSS Unknown at-rule Warnings

If you see warnings about `@tailwind` or `@apply` being unknown, these are expected. The CSS language server doesn't understand Tailwind directives, but they work correctly.

The warnings have been suppressed in `.vscode/settings.json`.

## Common Issues

### Issue: "Cannot find module" errors

**Cause**: VS Code TypeScript server not recognizing path aliases

**Solution**: Restart TypeScript server (see above)

**Verify**: Run `pnpm type-check` - should pass without errors

### Issue: Build fails

**Cause**: Actual TypeScript errors

**Solution**: 
1. Check error messages in terminal
2. Fix the reported errors
3. Run `pnpm type-check` to verify

### Issue: Development server won't start

**Solution**:
```bash
# Kill any existing processes on port 3000
lsof -ti:3000 | xargs kill -9

# Start dev server
pnpm dev
```

### Issue: Changes not reflecting

**Solution**:
1. Stop the dev server (`Ctrl+C`)
2. Clear Next.js cache: `rm -rf .next`
3. Restart: `pnpm dev`

## Verification Commands

```bash
# Type check without building
pnpm type-check

# Full build (includes type checking)
pnpm build

# Linting
pnpm lint

# Run dev server
pnpm dev
```

All commands should complete successfully if the project is set up correctly.
