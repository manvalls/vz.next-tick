var callbacks = [],
		args = [],
		thats = [],
		ids = [],
		ticker = new Image(),
		state = true;

ticker.onerror = function(){
	var cb,
			c = callbacks,
			t = thats,
			a = args;
	
	callbacks = [];
	thats = [];
	args = [];
	ids = [];
	
	while(cb = c.shift()) cb.apply(t.shift(),a.shift());
};

module.exports = function(callback,arg,that){
	var id;
	
	callbacks.push(callback || function(){});
	args.push(arg || []);
	thats.push(that || window);
	ids.push(id = {});
	
	if(state) ticker.src = 'data:,0';
	else ticker.src = 'data:,1';
	
	state = !state;
	return id;
};

module.exports.clear = function(id){
	var i = ids.indexOf(id);
	
	if(i == -1) return;
	
	callbacks.splice(i,1);
	thats.splice(i,1);
	args.splice(i,1);
	ids.splice(i,1);
};

