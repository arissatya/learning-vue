new Vue({
  el: "#app",
  data: {
    fetchedData: [],
    isShow: false
  },
  methods: {
    fetchData() {
      this.isShow = true
      axios({
        method: "GET",
        url: "http://localhost:3000/"
      })
        .then(({ data }) => {
          this.fetchedData = data
          console.log(this.isShow);
        })
        .catch(err => {
          console.log(err);
        })
    },
    clearData() {
      this.fetchData = []
      this.isShow = false
      console.log(this.isShow);
    }
  }
})