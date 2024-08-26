console.log("src/patch.js START");
window.onload = function() {
    console.log('window.onload');
    // re-sort table
    Tabulator.findTable('#servers_table_tabulator')[0].setSort([
        {column:"mod_status_display", dir:"desc"}, //then sort by this second
        {column:"player_count", dir:"desc"}, //sort by this first
    ]);
};
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
});

setTimeout(function() {
    console.log('setTimeout(0)');
}, 0);


// this.setSort(column, dir);
// }

// }

// // this.table.rowManager.sorterRefresh(!this.sortList.length);
// this.refreshSort();
console.log("src/patch.js END");