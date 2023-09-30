function Pet({ name, species }) {
  // console.log(name, species, pic)
  // let image = document.querySelector('#pic').src
  // image = pic
  // let image = "\'" + pic + "\'"
  // console.log(image.concat("'", image, "'"))
  // console.log("\'" + pic + "\'")

  // console.log('from inside pet', name, species)
  return (
    // <li>
    //     <p>This pet is called {name}.</p>
    //     <p>{name} is a {species}.</p>
    //     <img class='pet-thumbnail' id='pic' src={image}></img>
    // </li>
    <>
      <p>This pet is called {name}.</p>
      <p>
        {name} is a {species}.
      </p>
    </>
    // <>
    // <li>Hello</li>
    // </>
  );
}
// function Pet(list, index) {
//     console.log('list from inside Pet', list)
//     // let image = document.querySelector('#pic').src
//     // image = list[index].pic
// return (
//     <li>
//         <p>This pet is called {list[index].name}.</p>
//         <p>{list[index].name} is a {list[index].species}.</p>
//         <img class='pet-thumbnail' id='pic'></img>
//     </li>
//     // <>
//     // <li>Hello</li>
//     // </>
// )
// }

export default Pet;
