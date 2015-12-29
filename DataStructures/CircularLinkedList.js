function prisonersGame() {
	var prisoners = new CircularLinkedList();
	var interval = 8;
	var i = 0;

	while(i++ < 10) {
		prisoners.push(i);
	}

	var kill = prisoners.head;

	while(prisoners.length > 1) {
		i=0;
		while(i++ < interval) {
			kill = kill.next;
		}
		var del = kill.value;
		kill = kill.next;
		prisoners.delete(del);
	}
}

function runCirc() {
	var myList = new CircularLinkedList();


	myList.push(4);
	myList.push(3);
	myList.push(5);

	myList.delete(4);
	myList.delete(3);
	myList.delete(6);
}
function CircularLinkedList() {
	this.length = 0;
	this.head = null;
}

CircularLinkedList.prototype = { 
	push: function(val) {
		var node = {
			value: val,
			next: null
		};
		if (this.head === null) {
			this.head = node;
			node.next = this.head;
		}
		else {
			current = this.head;
			while(current.next != this.head) {
				current = current.next;
			}
			current.next = node;
			node.next = this.head;
		}
		this.length++;

		this.print();
	},

	delete: function(val) {
		if(this.head.value === val) {
			var curr = this.head;

			while(curr.next != this.head) {
				curr = curr.next;
			}
			this.head = this.head.next;
			curr.next = this.head;
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
		prev = curr;
		curr = curr.next;

		while(curr != this.head && curr.value != val) {
			prev = curr;
			curr = curr.next;
		}

		if(curr === this.head) return null;

		return prev;
	},

	print: function() {
		var curr = this.head;

		var string = curr.value + "->";
		curr = curr.next;

		while(curr != this.head) {
			string += curr.value + "->";
			curr = curr.next;
		}

		console.log(string);
	}
}