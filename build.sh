set -e

vuepress build docs
cd docs/.vuepress/dist
git init
touch .nojekyll
git add -A
git commit -m 'deploy'
git push -f git@github.com:xz-liu/xz-liu.github.io.git master:master
cd ../
rm -rf dist/
cd ../../
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:xz-liu/xz-liu.github.io.git master:source
rm -rf .git/
