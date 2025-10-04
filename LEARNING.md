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