var colonnes = 10;
var lignes = 10;
var html ; 

for (var i = 0; i < lignes; i++) {
    html += "<tr class='line'>"
    
    for (var j = 0; j < colonnes; j++) {
        html += "<td class='case'></td>"
        }
        html += "</tr>"
}
$('#table').append(html)

