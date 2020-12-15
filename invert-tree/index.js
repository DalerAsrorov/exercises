
function invertTree(tree) {
    if (tree) {
        if (tree.left || tree.right) {
            let left = tree.left;
            let right = tree.right;

            tree.left = right;
            tree.right = left;

            invertTree(tree.left);
            invertTree(tree.right);
        }
    }
}

module.exports = invertTree;