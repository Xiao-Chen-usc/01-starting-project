export default function TabButton({children, onSelect, ...props}){
//     children：这是React内置的一个prop，它可以包含任何类型的子元素，例如字符串、JSX元素或者其他组件等。在这个 TabButton 组件中，children 通常用于定义按钮的文本或内容。
// onSelect：这个prop应该是一个函数，当按钮被点击时会被调用。它允许 TabButton 组件通知其父组件有关用户操作的信息。
    return (
        console.log("tab button"+children+"111"),
    <li>
        <button className ={onSelect ? 'active' : undefined} {...props}>{children}</button>
    </li>
    )
}