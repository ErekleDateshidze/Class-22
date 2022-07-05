class DataTable {
    constructor() {
        this.el = document.getElementById("table")
        this.fetchTableData()
    }

    async fetchTableData() {
        const data = await fetch("./tableData.json")
        const parsed = await data.json()
        this.data = parsed;
        this.buildTable();
    }


    buildTable() {
        const headers = Object.keys(this.data[0])
            .map((headers) => {
                return `<th>${headers}</th>`
            })
            .join("")


        const rows = this.data.slice(1).map((row) => {
            const values = Object.values(row)
                .map((values) => {
                    return `<tr>${values}</tr>`
                })
                .join("")
            return `<tr>${values}</tr>`

        })
        this.el.innerHTML = `
            <thead>${headers}</thead>
            <tbody>${rows}</tbody>
        `
    }
}

new DataTable();