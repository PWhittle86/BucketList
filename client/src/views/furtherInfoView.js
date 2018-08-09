var FurtherInfoView = function(){
  this.country = [];
}

FurtherInfoView.prototype.clearContent = function(){
  let divTag = document.querySelector('#furtherInfo');
  while (divTag.hasChildNodes()){
    divTag.removeChild(divTag.lastChild);
  }
}

FurtherInfoView.prototype.render = function(country){
  let divTag = document.querySelector('#furtherInfo');
  let header = document.createElement('p');
  header.innerText = 'Country Info:';
  divTag.appendChild(header);
  const ul = document.createElement('ul');
  const name = document.createElement('li');
  name.innerText = `Name: ${country.name}`;
  ul.appendChild(name);
  const capital = document.createElement('li');
  capital.innerText = `Capital: ${country.capital}`;
  ul.appendChild(capital);
  const language = document.createElement('li');
  language.innerText = `Main Language: ${country.languages[0].name}`;
  ul.appendChild(language);
  const pop = document.createElement('li');
  pop.innerText = `Population: ${country.population}`;
  ul.appendChild(pop);
  divTag.appendChild(ul);
}

module.exports = FurtherInfoView;
