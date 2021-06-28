var tomb = [];

function fill_toplist() {
    // vegigmegyunk a localStorage mentett elemein es egy uj tombbe pakoljuk. asszociativ tomb

    for (var i = 0; i < localStorage.length; i++) {
        tomb[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
    }
    // csokkeno sorrendbe rendezzuk az elemeket az elert pontszam alapjan
    tomb.sort(function (a, b) {
        return b[1] - a[1];
    });
    // a 10 legtobb pontot elert jatekost jelezzuk ki a listan
    for (let act_data of tomb.keys()) {
        if (act_data < 10) {
            $('#list').append(tomb[act_data][0] + ' - ' + tomb[act_data][1] + '<br><hr>');

        }
    }
}