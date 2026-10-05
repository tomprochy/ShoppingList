Infra -
repositář
akce jedna pro nasazení na GHB pages
akce pro přípravu imagů na dockerhub

**kod vyvíjím ve vscode**
Push bez verze se musí deoployovat na ghb ručně - přidá k imagi shaxxxx tag
Push s verzí (v1.0.0) se deployuje automaticky a přidává číslo verze+latest na dockerhubu

Jak doručit push i s tagem na GHB:

git add .
git commit -m "Průlomová funkce"
git tag -a v1.0.0 -m "Verze 1.0.0"
git push origin master --follow-tags

případně se dá poslat tag extra (ale řádky výše by měly stačit):
a)
git push origin master v0.0.12 (takto i se všemi commity které nejsou v syncu)
b)
git push origin v0.0.12 (takto posílám jen tag)

dockerhub akce provede build a pošle image do repository - pokud je s verzí tak se po pushi automatick naleje
pokud je to build bez verze tak se musí nalít přes action ručním spuštěním a shaXXX buildu se propíše jako verze

následně provede pull dané image na vps serveru netcup a její spuštění

- autentikace přes google
- data ze suprabase
