if [ ! -f './.husky/_/husky.sh' ]; then
  npx husky install
fi

if [ ! -f './.husky/pre-commit' ]; then
  npx husky add './.husky/pre-commit' 'yarn style; yarn lint'
fi

if [ ! -f './.husky/commit-msg' ]; then
  npx husky add './.husky/commit-msg' 'npx --no-install commitlint --edit "$1"'
fi