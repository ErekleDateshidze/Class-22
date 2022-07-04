class DataTable {
    constructor() {
        this.el = document.getElementById("table")
        this.fetchTableData()
    }

    async fetchTableData() {
        const data = await fetch("./tableData.json")
        const parsed = await data.json()
        this.data = parsed;
    }


    buildTable() {
        const headers = Object.keys.this.data[0]
    }
}
