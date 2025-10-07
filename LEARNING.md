# Learning Log

A daily journal of my journey from design to development.

> **How to use**: Copy the template below and paste it at the top for each new day. Keep newest entries first!

---

## TEMPLATE - Copy this for new entries, replace this line with YYYY-MM-DD

### What I Learned Today
*Brief bullet points of key learnings*

### Technical Concepts
*Deep dive into 1-2 concepts - explain in your own words*

### Design → Code Translation
*Connections between design skills and code*

### Challenges & Solutions
*Problems encountered and how you solved them*

### Questions / To Explore
*Things you're curious about or don't fully understand yet*

### Resources Used
*Links, docs, tutorials that helped*

### Tomorrow's Goals
*What you want to tackle next*

---


## 2025-10-07

### What I Learned Today
- using a flexible metaDataItem as a flexible field in an interface
- Component prop configurations
- anchor scroll id and slugifying the id

### Technical Concepts
**Flexible MetaData**
- When there are cases where different files might need different meta data, we can create a flexible metadata within an interface

e.g.
```typescript
export interface MetadataItem {
  label: string; // Display label (e.g., "Role", "Timeline", "Collaborators")
  value: string | string[]; // Single value or array for multi-line display
}

//then we add this to the interface
export interface CaseStudy extends Frontmatter {
  metadata?: MetadataItem[]; // Flexible metadata array for detail page header
}

```

This gives us the flexibility to give any label and value we want for each markdown file


**Component prop configurations**
- The way we think of how we design the component props is just like how I would consider the Figma component properties. Apply the same level of systems thinking. 
- For the case of the text configuration
    - Eyebrow text: visible component property + editable text
    - Headline text: visible component property + editable text
    - Body text: visible component property + editable text
    - Layout: Variants: Grid/Centre
    - Alignment: Variants: Left/Right


### Design → Code Translation
*Connections between design skills and code*

### Challenges & Solutions
*Problems encountered and how you solved them*

### Questions / To Explore
*Things you're curious about or don't fully understand yet*

### Resources Used
*Links, docs, tutorials that helped*

### Tomorrow's Goals
*What you want to tackle next*

---

## 2025-10-06

### What I Learned Today
- react component structure
- const vs. let
- .filter()
- dynamic routing in next.js
- Rendering strategy with: Static, server side, client side
- await params
- generateMetaData
- generateStaticParams
- 404 page not found error handling



### Technical Concepts


**React component structure**

```typescript
//Simplest component
- function Greeting() {
    return <h1>Hello world!</h1>
} 

//using it
<Greeting />
```

```typescript
//Adding props
- function Greeting({ name }){
    return <h1>Hello {name}!</h1>
}

//using it
<Greeting name="Alex"/>
// Renders: <h1>Hello, Alex!</h1>
```


**.filter()**
- build-in function,
- We can declare temporary variable names on the fly, caseStudy.filter((cs) => cs.featured)
    - `cs` is a variable name on the fly

**dynamic routing in next.js**
Folder: app/work/[slug]/page.tsx

**await params**
- always use await params in any dynamic route
- Use in:
    1. generateMetaData()
    2. 
- `params` is a promise that is opened with `await` to access the actual URL values inside

**generateStaticParams**
This is used to declare a page to be built at build time


Static (SSG): Renders on build time, use when content doesnt change often
Server (SSR): Renders on every request, use when content changes per user or frequently
Client (CSR): Renders in the browser, use when highly interactive, user specific

Examples
Page	            Strategy	    Why
Homepage	        Static (SSG)	Same for everyone, doesn't change often
Product listings	Static (SSG)	Pre-build all category pages
Product details	    Static (SSG)	Pre-build all product pages
User account	    Server (SSR)	Personalized, different per user
Shopping cart	    Client (CSR)	Interactive, updates frequently
Checkout	        Server (SSR)	Needs real-time inventory check

- Shape matching rule:
    - The returned object keys MUST match folder bracket names
    Folder: app/work/[slug]/page.tsx
    Return: { slug: 'value' }

    Folder: app/blog/[category]/[id]/page.tsx
    Return: { category: 'tech', id: '123' } 


**generateMetaData()**
- Hierachy follows from Root layout (default metadata for entire site)
    - -> Page specific overrides

- Best practice to use for any public facing pages, searchable or sharable
- Skip for admin panels, authentication pages, anything you don't want to be indexed


**Error handling pattern**
- 404 pattern
    - Must add handling `if (!caseStudy) {notFound}; //shows 404 page by default`

- For customisation, create `app/not-found.tsx` for custom 404 design instead of next.js default


### Design → Code Translation
*Connections between design skills and code*

### Challenges & Solutions
*Problems encountered and how you solved them*

### Questions / To Explore
*Things you're curious about or don't fully understand yet*

### Checklist
- [] Folder name [slug] creates dynamic route
- [] Always await params before using it
- [] generateStaticParams() returns array of objects matching route structure
- [] Shape matching: { slug: ... } for [slug] folder
- [] Static generation happens at build time, renders complete HTML
- [] Add generateMetadata() for better SEO
- [] Check if data exists, use notFound() if missing
- [] New content requires rebuild for static sites

### Tomorrow's Goals
*What you want to tackle next*

---


## 2025-10-05

### What I Learned Today
- Learned about fs, path modules

### Technical Concepts
**fs**: read file

**path**: write file address

**export vs default export**
- you can only have one default export in one file
    - when you import, you can call it anything, no curly brace{} when importing
    - not part of the modern best practice due to more inconsistencies in code if anyone can name what they want
- For "export", aka "named export", you can have multiple in a file
    - when you import, you have to use the actual name {actualName}
    - Best practice in modern coding




### Design → Code Translation
*Connections between design skills and code*

### Challenges & Solutions
*Problems encountered and how you solved them*

### Questions / To Explore
*Things you're curious about or don't fully understand yet*

### Resources Used
*Links, docs, tutorials that helped*

### Tomorrow's Goals
*What you want to tackle next*

---


## 2025-10-04

### What I Learned Today
- Connected local Next.js project to GitHub repository
- Resolved my first git merge conflict between local and remote README files
- Learned about "unrelated histories" in git and how to merge them
- MDX versus markdown
- Content processing pipeline with Remark and Rehype
- Gray-matter
- Learned about Typescript interface and types
- MDX utilities
- Navigation components
- CaseCardGrid and CaseCard and how props are passed from parent to child

### Technical Concepts

**Git Merge Conflicts**: When two versions of the same file have different content, git can't automatically decide which to keep. You have to manually resolve by choosing what to keep from each version.

**MDX versus plain Markdown**: MDX files allow us to embed React components within it while plain markdown is just pure styling. 

**gray-matter**
gray-matter extracts the "frontmatter" from your content files. Frontmatter is metadata at the top of a file, written in YAML format between --- markers:

title: "My Portfolio Piece"
date: "2025-01-15"
category: "Design"
featured: true


//# The actual content starts here...

This allows the user to create some metadata that is not displayed within the content of the markdown file. And it's helpful if we need to use it to filter sort content. 

**Remark and Rehype Plugins**
Both plugins are needed to convert mdx file into markdown, into html that is ultimately displayed

Remark processes the file in markdown 
Rehype styles the final content

Remark - Works with Markdown AST (Abstract Syntax Tree)
Example: remark-gfm adds GitHub Flavored Markdown (tables, task lists, etc.)

Rehype - Works with HTML AST
Example: rehype-highlight adds syntax highlighting to code blocks

**interface vs type**
- interface = A contract or specification for object shapes. It says "any object that implements me must have these properties"
    - You can extend an interface to connect fields
    - Declaration merging (Unique to interface), Typescript merges the declaration through multiple files.

```
interface User {
  id: string;
  name: string;
  email: string;
}
```

- type = A type alias that can name ANY type - objects, primitives, unions, intersections, functions, you name it
    - Type can do everything interface can do
    - Can use Union types (type Status = "draft" | "published" | "archived";)
    - intersection type (BlogPost = Timestamp & Author & {define more here})


```
type User = {
  id: string;
  name: string;
  email: string;
};
```


Use ? to denote optional fields

e.g. interface BlogPost {
  title: string;      // Required - must always be provided
  content: string;    // Required
  author?: string;    // Optional - can be undefined
  tags?: string[];    // Optional
}


- Key difference summary
|     Feature    | interface | type |
|----------------|-----------|------|
| Object shapes  | ✅ Yes    | ✅ Yes |
| Extend/Inherit | ✅ Yes (extends) | ✅ Yes (with &) |
| Union types    | ❌ No     | ✅ Yes |
| Intersection   | ❌ No     | ✅ Yes |
| Primitives     | ❌ No     | ✅ Yes |
| Tuples         | ❌ No     | ✅ Yes |
| Functions      | ❌ No     (well, yes but awkward) | ✅ Yes |
| Declaration merging | ✅ Yes | ❌ No |
| Performance    | Slightly faster | Slightly slower |


**string vs. string[]**
string - One piece of text: "Next.js"
string[] - An array (list) of text pieces: ["Next.js", "React", "TypeScript"]



**Remote Repository Setup**:
```bash
git remote add origin [url]  # Connect to GitHub
git push -u origin main      # Push and set upstream
```


**MDX utilities**
- File System operations (Server side)
    - fs.readdirSync() - Reads all files in a directory
    - fs.readFileSync() - Reads specific file content
    - path.join() - Creates proper file paths
    - These run on Node.js (server), not browser

- Data Fetching pattern
    - getAllCaseStudy() -> Returns array of all case studies
    - getCaseStudyBySlug() -> Returns single case study (details page)


**const syntax**
This is the syntax to declare variables in typescript

**use client**
This tells next.js that a particular component needs to be run in the browser (client-side). We do client side rendering for interactive component and server side rendering for static mockups.

- Use Server Components (default) when:
    Just displaying content
    Fetching data from filesystem/database
    Using secret keys
    SEO matters (search engines see the HTML)

- Use Client Components ('use client') when:
    onClick, onChange, onSubmit handlers
    useState, useEffect, other React hooks
    Browser APIs (localStorage, window)
    Third-party libraries that need browser (like animation libraries)

**Props**: Like Figma component properties - make components reusable and dynamic

**useState**: Lets components remember values
- Pattern: const [value, setValue] = useState(initial)
- Changing state triggers re-render
- Like Figma variables

**Next.js Link**: Client-side navigation, no page reload

**File-based routing**: `app/contact/page.tsx` → `/contact` route

**.map()**
A loop that transforms each item in an array
Returns a new array with the transformed items
Perfect for creating multiple components from data

**Props data flow**
- Props flow from parent (CaseStudyGrid) to child (CaseStudyCard)
- Parent passes data, child receives and displays it
- One-way data flow: parent → child

CaseStudyGrid (parent)
  ↓ receives array of case studies
  ↓ .map() loops through array
  ↓ for each study, creates a CaseStudyCard
  ↓
CaseStudyCard (child) 
  ↓ receives one study's data as props
  ↓ displays that study

**propName={dataSource}**
Left side of = (prop name):
✅ Must match what the child component expects
✅ Defined in the child component's props interface
❌ You can't just make this up

Right side of = (data source):
✅ Can be any variable, object property, or expression
✅ Must be wrapped in curly braces {}
✅ You have full control over the name



### Design → Code Translation
**props** a react component has props that are similar to properties in a component in Figma

### Challenges & Solutions
**Problem**: Git rejected my push because remote had different README
**Solution**: Used `git pull --allow-unrelated-histories` then manually merged the files

**Problem**: MDX configuration compatibility with Turbopack
**Solutions**: Using Turbopack's rules configuration instead of the plugin wrapper
Creating the mdx-components.tsx file for custom MDX components
Updating from deprecated experimental.turbo to the newer turbopack config property



### Questions / To Explore
- What's the difference between merge and rebase?
- When should I create a new branch vs working on main?

### Resources Used
- Claude Code for git workflow assistance

### Tomorrow's Goals
- [ ] Start building portfolio homepage
- [ ] Learn about Next.js routing

### Workflow learnings
- Created a LEARNING.md file to document my learnings each day as I build
- Added instructions within CLAUDE.md file to test and nudge me to fill up my learnings.