module.exports = class {
	constructor() {
		this.oldgen = require('../gen/old.json');
		this.gen = require('../gen/new.json');
		this.crpt = (arg, string, type)  => {
			const alpha = this.oldgen.numbers + this.oldgen.symbols + this.oldgen.sign.en + this.oldgen.sign.en.toUpperCase() + this.oldgen.sign.ru + this.oldgen.sign.ru.toUpperCase() + this.oldgen.sign.enCode + this.oldgen.sign.enCode.toUpperCase();
			let first = alpha,
				second = alpha;
			if(type) {
				second = arg;
			} else {
				first = arg;
			};
			let cript = '';
			try {
				for(let m = 0; m != string.length; m++) {
					cript += second.charAt(first.indexOf(string.charAt(m)));
				};
			} catch {
				throw 'Second argument must be string';
			};
			return cript;
		};
	};
	cript(arg, string) {
		this.boolean = false;
		this.gen.forEach((gen, number) => {
			if((gen.key == arg) || (gen.name == arg) || (number == arg)) {
				this.boolean = this.crpt(gen.key, string, 1);
			};
		});
		if(!this.boolean) {
			this.boolean = this.crpt(arg, string, 1);
		};
		return this.boolean;
	};
	uncript(arg, string) {
		this.boolean = false;
		this.gen.forEach((gen, number) => {
			if((gen.key == arg) || (gen.name == arg) || (number == arg)) {
				this.boolean = this.crpt(gen.key, string, 0);
			};
		});
		if(!this.boolean) {
			this.boolean = this.crpt(arg, string, 0);
		};
		return this.boolean;
	};
	info() {
		const o = this.oldgen;
		let length = o.numbers.length + o.symbols.length + o.sign.en.length + o.sign.ru.length + o.sign.enCode.length,
			shield = 1;
		for(;length != 0; length--) {
			shield *= length;
		};
		return {
			size: length,
			supsymbols: o,
			bruteshield: shield,
			version: require('../package.json').version
		};
	};
};