function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype = {

    //restore constructor
    constructor: BinarySearchTree,

    add: function (value){
        var node = {
            value: value,
            left: null,
            right: null
        },
        current;

        if(this.root === null) {
            this.root = node;
        }
        else {
            current = this.root;

            while(true) {
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = node;
                        break;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if(value > current.value){
                    if(current.right === null) {
                        current.right = node;
                        break;
                    }
                    else {
                        current = current.right;
                    }
                }
                else {
                    break;
                }
            }
        }
    },

    contains: function(value){
        var found = false,
            current = this.root;

        while(!found && current) {
            if(value < current.value) {
                current = current.left;
            }
            else if(value > current.value) {
                current = current.right;
            }
            else {
                found = true
            }
            return found;
        }
    },

    remove: function(value){
        if(!this.root) {
            return null;
        }
        else {
            var current = this.root,
                par;

            while (!current) {
                if(value < current.value) {
                    current = current.left;
                } 
                else if(value > current.value) {
                    current = current.right;
                }
                else {
                    break;
                }
            }

            if(!current) return;

            var del = current;
            current = current.right;

            while(current.left !== null) {
                par = current;
                current = current.left
            }

            del.value = current.value;
            par.left = current.right;
        }


    },

    traverse: function(method) {
        //helper traversal function
        function inOrder(node) {
            //check node exists
            if(node) {
                //traverse the left subtree
                if (node.left !== null) {
                    inOrder(node.left);
                }

                //apply the method to this node
                method.call(this, node);

                if(node.right !== null) {
                    inOrder(node.right);
                }
            }
        }

        //start at the root
        inOrder(this.root);
    },

    size: function(){
        var length = 0;

        this.traverse(function(node) {
            length++;
        });

        return length;
    },

    toArray: function(){
        var result = [];

        this.traverse(function(node) {
            result.push(node.value);
        });

        return result;
    },

    toString: function(){
        return this.toArray().toString();
    }

};