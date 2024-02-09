const page = document.getElementById("page1")
console.log(page.classList)

const button = document.getElementById("button")
let count = 0
button.addEventListener("click", (e) => {
  count++
  if (count < 4) {
    page.classList = "page" + count
  } else {
    count = 0
  }
})

// const pages = [
//   { id: "page1", color: "#2196F3" },
//   { id: "page2", color: "#4CAF50" },
//   { id: "page3", color: "#4CAF50" },
// ]
// // console.log(pages[0].id)

// let currentPage = pages[0]

// function changePage() {
//   currentPage = pages.filter((e) => {
//     pages.id !== currentPage.id[0]
//     console.log(pages.id !== currentPage.id[0])
//     //   console.log("la pagina es " + currentPage)
//   })
//   updatePage()
// }

// function updatePage() {
//   pages.forEach((page) => {
//     console.log(page.id)
//     // const element = document.getElementById(page.id)
//     const element = document.getElementById("page1")

//     console.log(element.id)
//     // console.log(page.id === currentPage.id ? "flex" : "none")
//     //  element.id = page.id === currentPage.id ? "flex" : "none"
//   })
//   console.log(document.element.classList)
//   //   document.body.style.backgroundColor = currentPage.color
// }

// updatePage()
