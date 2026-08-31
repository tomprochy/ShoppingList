Infra -
repositář
akce jedna pro nasazení na GHB pages
akce pro přípravu imagů na dockerhub

**kod vyvíjím ve vscode**
Push bez verze se musí deoployovat na ghb ručně - přidá k imagi shaxxxx tag
Push s verzí (v1.0.0) se deployuje automaticky a přidává číslo verze+latest na dockerhubu

Pozor - pro doručení tagu z vscode na github jsem musel tagy extra pushovat. S commitem tam nešel.
Nejdřív udělá klasický commit a otagování:
git add .
git commit -m "Popis vašich změn"
git tag v1.0.0

potom pushnu commit:
git push origin master

a potom pushu tag extra:

git push origin master v0.0.12 (takto i se všemi commity které nejsou v syncu)
nebo
git push origin v0.0.12 (takto posílám jen tag)

dockerhub akce provede build a pošle image do repository - pokud je s verzí tak se po pushi automatick naleje
pokud je to build bez verze tak se musí nalít přes action ručním spuštěním a shaXXX buildu se propíše jako verze

- autentikace přes google
- data ze suprabase
