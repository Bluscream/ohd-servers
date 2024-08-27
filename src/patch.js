console.log("src/patch.js START");
function windowCallback(response) {
    console.log("[remote] windowCallback(window)");
    const iframe = document.querySelector('#servers_table_tabulator');
    overwolf.windows.changeSize({
        "window_id":response.window.id,
        "width": iframe.offsetWidth + 400,
        "height": iframe.offsetHeight + 100,
        "auto_dpi_resize":true
      }, null);
      overwolf.windows.changePosition(response.window.id, left=100, top=200, callback=null)
}
window.onload = function() {
    console.log('window.onload');
    setTimeout(function() {
        console.log('window.onload -> setTimeout()');
        // document.querySelector('.table-responsive').style = "background-color:black;" // set bg color
        // re-sort table
        const table = Tabulator.findTable('#servers_table_tabulator')[0];
        // table.clearFilter(true);
        table.setSort([
            // {column:"mod_status_display", dir:"asc"}, //then sort by this second
            {column:"player_count", dir:"desc"}, //sort by this first 
        ]);
        table.setFilter([
            {field:"mod_status_display", type:"like", value:"Up to Date"},
            // {field:"gamemode_s", type:"like", value:"Casualfield"}, // Remove to show all servers
            {field:"restrictions_display", type:"=", value:""},
        ]);
        // table.refreshFilter();
        // overwolf.windows.getCurrentWindow(windowCallback);
    }, 1000);
    
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