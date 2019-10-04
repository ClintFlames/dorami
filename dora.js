const gen = require('./gens.json'),
GenerateDoRamiCode = () => {
	let str = 'Successfully regenerated new DoRami code.',
	oldGens = [];
	gen.gen.forEach((name, number) => { oldGens[number] = name; });
	if(gen.new.length == 0) { str = 'Successfully generated new DoRami code.'; };
	for(let i = 0; i < gen.gen.length; i++) {
		for(let lol = false; lol == false;) {
			let c = Math.floor(Math.random() * (gen.gen.length - 0 + 1)) + 0;
			if(gen.gen[c] != null) {
				gen.new[i] = gen.gen[c];
				delete gen.gen[c];
				lol = true;
			};
		};
	};
	let Ngen = {
		old : gen.old,
		gen : oldGens,
		new : gen.new
	};
	require('fs').writeFileSync('./node_modules/DoRami/gens.json', JSON.stringify(Ngen), err => { if(err) return console.log(err) });
	console.log(str);
	},
inDoRamiCode = str => {
	if(gen.new.length == 0) { GenerateDoRamiCode() };
	let arr = new Array();
	for(let x = 0; x < str.length; x++) {
		arr[x] = str.charAt(x);
	};
	str = '';
	arr.forEach(name0 => {
		gen.old.forEach( (name1, i1) => {
			if(name0 == name1) {
				str = str + gen.new[i1] + '_0';
			} else if(name0 == name1.toUpperCase()) {
				str = str + gen.new[i1] + '_1';
			};
		});
	});
	return str;
},
	outDoRamiCode = str => {
	if(gen.new.length == 0) { GenerateDoRamiCode() };
	let arr = new Array();
	for(let x = 0; x < str.length; x++) {
		arr[x] = str.charAt(x);
	};
	str = '';
	arr.forEach( (name0, i0) => {
		gen.new.forEach((name1, i1) => {
			if(name0 == name1) {
				let duck = gen.old[i1];
				if(arr[i0 + 1] = "_") {
					if(arr[i0 + 2] == '1') {
						duck = duck.toUpperCase();
					};
					arr[i0 + 1] = '';
					arr[i0 + 2] = '';
				};
				str = str + duck;
			};
		});
	});
	return str;
};
module.exports = {
	in : inDoRamiCode,
	out : outDoRamiCode,
	gen : GenerateDoRamiCode
};