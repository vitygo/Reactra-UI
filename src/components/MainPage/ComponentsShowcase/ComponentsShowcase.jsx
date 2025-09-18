import './ComponentsShowcase.css'
import './ComponentCard.css'
import './ComponetsStyles.css'

const uiComponentsСategories = [
    {
      id: 1,
      category: "Core UI Components",
      subcategories: [
        { id: 101, name: "Buttons" },
        { id: 102, name: "Badges / Labels / Tags" },
        { id: 103, name: "Icons" },
        { id: 104, name: "Avatars / Profile Pictures" },
        { id: 105, name: "Images / Thumbnails" }
      ]
    },
    {
      id: 2,
      category: "Forms & Inputs",
      subcategories: [
        { id: 201, name: "Input Fields / Text Inputs" },
        { id: 202, name: "Textareas" },
        { id: 203, name: "Checkboxes" },
        { id: 204, name: "Radio Buttons" },
        { id: 205, name: "Select / Dropdowns" },
        { id: 206, name: "Switches / Toggles" },
        { id: 207, name: "Sliders" },
        { id: 208, name: "Date / Time Pickers" },
        { id: 209, name: "Form Validation / Error Messages" }
      ]
    },
    {
      id: 3,
      category: "Navigation",
      subcategories: [
        { id: 301, name: "Navbar / Header" },
        { id: 302, name: "Sidebar / Drawer" },
        { id: 303, name: "Breadcrumbs" },
        { id: 304, name: "Pagination" },
        { id: 305, name: "Tabs" },
        { id: 306, name: "Menus / Dropdown Menus" },
        { id: 307, name: "Steps / Progress Steps" }
      ]
    },
    {
      id: 4,
      category: "Layout & Display",
      subcategories: [
        { id: 401, name: "Cards" },
        { id: 402, name: "Modals / Dialogs" },
        { id: 403, name: "Tooltips" },
        { id: 404, name: "Popovers" },
        { id: 405, name: "Accordions / Collapse" },
        { id: 406, name: "Alerts / Notifications" },
        { id: 407, name: "Toasts" },
        { id: 408, name: "Tables / Data Grids" },
        { id: 409, name: "Lists / List Groups" },
        { id: 410, name: "Grids / Flex Layouts" }
      ]
    },
    {
      id: 5,
      category: "Media & Content",
      subcategories: [
        { id: 501, name: "Images / Media Objects" },
        { id: 502, name: "Avatars" },
        { id: 503, name: "Carousels / Sliders" },
        { id: 504, name: "Badges" }
      ]
    },
    {
      id: 6,
      category: "Miscellaneous / Utility Components",
      subcategories: [
        { id: 601, name: "Progress Bars" },
        { id: 602, name: "Spinners / Loaders" },
        { id: 603, name: "Tags / Chips" },
        { id: 604, name: "Dividers / Separators" },
        { id: 605, name: "Footers" }
      ]
    }
  ];
  




export default function ComponentsShowcase(){
    return(
        <section className="components-showcase-section">
            <h2 className="components-showcase-section__title"><span>Explore</span> the Components</h2>
            <p className="components-showcase-section__text">Browse our library of ready-to-use React components. Click any component to see a live demo and code examples, so you can quickly integrate them into your project</p>
            <div className="components-showcase-section__components-grid">
                {uiComponentsСategories.map(section => {
                   return section.subcategories.map(category => {
                       return <ComponentCard key={category.id} name={category.name} />
                    })

                })}
                

            </div>
        </section>
    );
}

export function ComponentCard({name}){
    return(
        <div className="component-card">
            <div className="card__header">
                <h4>{name}</h4>
            </div>
            <div className="card__body">
               <PrimaryButton/>
            </div>
            
            </div>
    )
}


export function PrimaryButton(){
    return(
        <button className="primary__button">Button</button>
    );
   

}