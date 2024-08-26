console.log("src/patch.js START");
window.onload = function() {
    console.log('window.onload');
    setTimeout(function() {
        console.log('window.onload -> setTimeout(2500)');
        // re-sort table
        const table = Tabulator.findTable('#servers_table_tabulator')[0];
        // table.clearFilter(true);
        table.setSort([
            // {column:"mod_status_display", dir:"asc"}, //then sort by this second
            {column:"player_count", dir:"desc"}, //sort by this first
        ]);
        table.setFilter([
            {field:"mod_status_display", type:"like", value:"Up to Date"},
            {field:"gamemode_s", type:"like", value:"Casualfield"},
            {field:"restrictions_display", type:"=", value:""},
        ]);
        // table.refreshFilter();
    }, 2500);
    
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