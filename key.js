module.exports = class {
	constructor() {
		this.gen = require('../gen/new.json');
		this.fs = require('fs');
	};
	add(key, name) {
		if(!key) {
			throw 'You must enter key';
		};
		this.gen.forEach((gen) => {
			if(gen.key == key) {
				throw 'This key already taken.';
			};
			if(gen.name == name) {
				throw 'This name already taken.';
			};
		});
		key = key.toString();
		const gen = {};
		if(key.toUpperCase() == 'RND') {
			const o = require('../gen/old.json'),
				variable = o.numbers + o.symbols + o.sign.en + o.sign.en.toUpperCase() + o.sign.ru + o.sign.ru.toUpperCase() + o.sign.enCode + o.sign.enCode.toUpperCase();
			let length = variable.length,
				buffer = [];
			key = '';
			for(; length != 0;) {
				let n = Math.floor(Math.random() * ((variable.length - 1) - 0 + 1)) + 0,
					bool = false;
				buffer.forEach((element) => {
					if(element == n) {
						bool = true;
					};
				});
				if(!bool) {
					buffer[buffer.length] = n;
					key += variable.charAt(n);
					length--;
				};
			};
		};
		gen.key = key;
		if(name != null) {
			gen.name = name;
		};
		this.gen[this.gen.length] = gen;
		this.fs.writeFileSync((__dirname.substr(0, (__dirname.length - 5)) + 'gen/new.json'), JSON.stringify(this.gen));
	};
	del(arg) {
		const gens = [];
		this.boolean = false;
		this.gen.forEach((gen, number) => {
			if(arg != null) {
				if(!((gen.key == arg) || (gen.name == arg) || (number == arg))) {
					gens[gens.length] = gen;
				} else {
					this.boolean = true;
				};
			};
		});
		if(!this.boolean) {
			throw 'Element not found.';
		} else {
			this.gen = gens;
			this.fs.writeFileSync((__dirname.substr(0, (__dirname.length - 5)) + 'gen/new.json'), JSON.stringify(this.gen));
		};
	};
	has(arg) {
		this.boolean = false;
		this.gen.forEach((gen, number) => {
			if(arg != null) {
				if((gen.key == arg) || (gen.name == arg) || (number == arg)) {
					this.boolean = true;
				};
			};
		});
		return this.boolean;
	};
	get(arg) {
		this.result = null;
		this.gen.forEach((gen, number) => {
			if(arg != null) {
				if((gen.key == arg) || (gen.name == arg) || (number == arg)) {
					gen.size = gen.key.length;
					if(gen.name) {
						gen.size += gen.name.length;
					};
					this.result = gen;
				};
			};
		});
		return this.result;
	};
	info() {
		this.size = 0;
		this.gen.forEach((gen, number) => {
			this.size += gen.key.length;
			if(gen.name) {
				gen.size += gen.name.length;
			};
		});
		return {
			size: this.size,
			elements: this.gen.length
		};
	};
};