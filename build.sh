rm docs/.vuepress/public/README.md      
cp README.md docs/.vuepress/public/ 
export NODE_OPTIONS=--openssl-legacy-provider


set -e
node scripts/update-scholar-citations.js MaIQOwsAAAAJ

vuepress build docs
cd docs/.vuepress/dist
git init
touch .nojekyll
git add -A
git commit -m 'deploy'
git push -f https://github.com/xz-liu/xz-liu.github.io.git main:master
cd ../
rm -rf dist/
cd ../../
rm -rf .git/
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/xz-liu/xz-liu.github.io.git main:src
rm -rf .git/
