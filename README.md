Infra -
repositář
akce jedna pro nasazení na GHB pages
akce pro přípravu imagů na dockerhub

**kod vyvíjím ve vscode**
Push bez verze se musí deoployovat na ghb ručně - přidá k imagi shaxxxx tag
Push s verzí (v1.0.0) se deployuje automaticky a přidává číslo verze+latest na dockerhubu

Pozor - pro doručení tagu z vscode na github jsem musel tagy extra pushovat. S commitem tam nešel.
git push origin v0.0.12   

- autentikace přes google
- data ze suprabase
