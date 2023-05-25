# Performance-Test-Beispiel zwischen Map und Array für Baueigenschaften

Source-Code ist [hier](https://github.com/Stjefan/mongo-performance.git) zu finden: 

Einzelne Ergebnisse:
Space
|| Map    | Array |
|---|---|---|
|Content| 20.5mb | 16.5mb|


Time
|| Map    | Array |
|---|---|---|
|initial insert| 3s | 1s|
| find  | 1s | 1.5s|
| update |0.2s| 1.0s|

Fazit:
Gerade das Update, das beim Aktiven und Definieren von Baueigenschaften (und damit auch beim Speichern von Baueigenschaftsprofilen an Baueinheiten) geht deutlich schneller. Hier sollte somit Performance-Gewinne möglich sein. Nachteilig wirkt sich bisher hauptsächlich die dadurch nötige, tiefgreifende Umstellung des Codes aus.