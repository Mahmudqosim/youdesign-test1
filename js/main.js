const searchEl = document.querySelector(".search-box input")
const searchResultsEl = document.querySelector(".search-results")

searchResultsEl.addEventListener("blur", () => {
  searchResultsEl.classList.remove("show")
})

searchEl.addEventListener("input", (e) => {
  searchResultsEl.innerHTML = ""

  if (e.target.value.trim().length < 2) {
    searchResultsEl.classList.remove("show")

    return
  }

  const matches = freelancersData
    .filter((data) =>
      new RegExp(e.target.value.trim().toLowerCase()).test(data.toLowerCase())
    )
    .sort((a, b) => a.length - b.length)

  if (matches.length > 0) {
    matches.forEach((match) => {
      let childList = document.createElement("li")
      childList.textContent = match

      searchResultsEl.appendChild(childList)
    })
  } else {
    let childList = document.createElement("li")
    childList.textContent = "No freelancer found"

    searchResultsEl.appendChild(childList)
  }

  searchResultsEl.classList.add("show")
})

searchEl.addEventListener("focusout", (e) => {
  searchResultsEl.innerHTML = ""

  searchResultsEl.classList.remove("show")
})
