function runList() {
	var myList = new LinkedList();


	myList.push(4);
	myList.push(3);
	myList.push(5);

	myList.delete(4);
	myList.delete(3);
	myList.delete(6);
}
function LinkedList() {
	this.length = 0;
	this.head = null;
}

LinkedList.prototype = { 
	push: function(val) {
		var node = {
			value: val,
			next: null
		};
		if (!this.head) {
			this.head = node;
		}
		else {
			current = this.head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.length++;

		this.print();
	},

	delete: function(val) {
		if(this.head.value === val) {
			this.head = this.head.next;
		}
		else {
			var prev = this.search(val);

			if(prev === null) {
				console.log(prev);
				return null;
			}

			prev.next = prev.next.next;
		}
		this.length--;
		this.print();
	},

	search: function(val) {
		var curr = this.head, prev;

		while(curr != null && curr.value != val) {
			prev = curr;
			curr = curr.next;
		}

		if(curr === null) return null;

		return prev;
	},

	print: function() {
		var curr = this.head;

		var string = "";

		while(curr != null) {
			string += curr.value + "->";
			curr = curr.next;
		}

		console.log(string);
	}
}