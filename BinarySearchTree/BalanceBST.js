// Java program for insertion in AVL Tree 
class Node {

   constructor(data) {
       //data
       this.data = data;
       //left child
       this.left = null;
       //right child
       this.right = null;
       // horizontaldistance from root
       this.height = 1;
   }
}

class BalancedBST {
   constructor() {
       // Initialize 
       this.root = null;
   }

   // function to get height 
   height(node) {
       if (node == null)
           return 0;
       return node.height;
   }

   // function to get maximum of two integers 
   max(a, b) {
       return (a > b) ? a : b;
   }

   // right rotate subtree 
   rightRotate(y) {
       var x = y.left;
       var T2 = x.right;

       // Perform rotation 
       x.right = y;
       y.left = T2;

       // Update heights 
       y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
       x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

       // Return new root 
       return x;
   }

   // function to left rotate subtree 
   leftRotate(x) {
       var y = x.right;
       var T2 = y.left;

       // Perform rotation 
       y.left = x;
       x.right = T2;

       // Update heights 
       x.height =Math.max(this.height(x.left), this.height(x.right)) + 1;
       y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

       // Return new root 
       return y;
   }

   // Get Balance factor of node 
   getBalance(node) {
       if (node == null)
           return 0;

       return this.height(node.left) - this.height(node.right);
   }

   insertNode(data) {
       if (this.root == null)
           this.root = (new Node(data));
       else
       {
         //  console.log("-->insert");
           this.root = this.insert(this.root, data);
       }
       console.log("inorder");
       this.inOrder(this.root);
       
   }

   insert(node, data) {

       // Perform the normal insertion 
       if (node == null)
       {
         //  console.log("-->");
           return (new Node(data));
       }
       if (data < node.data)
       {
          // console.log("-->left");
           node.left = this.insert(node.left, data);
       }
       else if (data > node.data)
       {
          // console.log("-->right");
           node.right = this.insert(node.right, data);
       }
       else 
       {
          // console.log("-->D");
           return node;
       }
       // Update height 
       node.height = 1 + Math.max(this.height(node.left),
       this.height(node.right));

     //balance factor
      var balance = this.getBalance(node);

     
       //  Left Left Case 
       if (balance > 1 && data < node.left.data)
           return this.rightRotate(node);

       // Right Right Case 
       if (balance < -1 && data > node.right.data)
           return this.leftRotate(node);

       // Left Right Case 
       if (balance > 1 && data > node.left.data) {
           node.left = this.leftRotate(node.left);
           return this.rightRotate(node);
       }

       // Right Left Case 
       if (balance < -1 && data < node.right.data) {
           node.right = this.rightRotate(node.right);
           return this.leftRotate(node);
       }

       return node;
   }

   // inorder traversal 
   inOrder(node) {

       if (node !== null) {
           this.inOrder(node.left);
           console.log(node.data);
           this.inOrder(node.right);
       }
   }

}

var balancedBST = new BalancedBST();

balancedBST.insertNode(10);
balancedBST.insertNode(8);
balancedBST.insertNode(9);
balancedBST.insertNode(7);
balancedBST.insertNode(6);
balancedBST.insertNode(5);
balancedBST.insertNode(12);
balancedBST.insertNode(22);
balancedBST.insertNode(3);
balancedBST.insertNode(21);
balancedBST.insertNode(4);
balancedBST.insertNode(17);
balancedBST.insertNode(19);
balancedBST.insertNode(20);
balancedBST.insertNode(14);


