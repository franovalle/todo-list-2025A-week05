
document.querySelector('#add').addEventListener('click', addItem)



function addItem() {
  let userInput = document.querySelector('input').value
  var ul = document.querySelector("#ul");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput));
  ul.appendChild(li);
  document.getElementById("my-form").reset();

}




/*{
  document.querySelector('#list').innerText = document.querySelector('input').value
   }
 
 
 
/*var playersCash = 1000



document.querySelector('#min').addEventListener('click', playSlots)
function playSlots() {
	let slotone = slotReturn()
	let slottwo = slotReturn()
	let slotthree = slotReturn()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)
	if (slotone === slottwo && slotone===slotthree && slottwo === slotthree) {
		increaseFive();


	}
	else {
		decreaseFive();

	}
}


function slotReturn() {
	var randomSlot = Math.floor(Math.random() * 5);


	return randomSlot
}
document.querySelector('#max').addEventListener('click', playSlotsAgain)
function playSlotsAgain() {
	let slotone = slotReturnAgain()
	let slottwo = slotReturnAgain()
	let slotthree = slotReturnAgain()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)
	if (slotone === slottwo && slottwo === slotthree) {
		increaseFifty();

	}
	else {
		decreaseFifty();

	}
}

function slotReturnAgain() {
	var randomSlot = Math.floor(Math.random() * 5);
	return randomSlot
}

function increaseFifty() {
	playersCash = playersCash + 50 * 20;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('WINNER!!!!!')

}
function increaseFive() {
	playersCash = playersCash + 5* 100 ;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('WINNER!!!!!')


}
function decreaseFifty() {
	playersCash -= 50;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('TRY AGAIN')

}
function decreaseFive() {
	playersCash -= 5;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('TRY AGAIN')


}
/*
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click',andiNext )
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}

/*document.querySelector('#yell').addEventListener('click', run)
document.querySelector('input').value.toLowerCase().trim()
    {
        document.querySelector('#list').innerText = document.querySelector('input').value
    }

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

}

/*const day = document.querySelector('#day').value

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}*/

