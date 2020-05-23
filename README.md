***************************************************************
##                         Context API:
***************************************************************
This gives us a way to share state, previously we can do that with props. In a larger type of application, props doesn't gives the effective result.
For solving this problem, Context API arises. It stores the data/state in a central place and share it between components without having to pass it down as props.
We do this data pass via 'Context Provider' which is just a react tag.

Suppose, APP -> Navbar -> StatusBar
We want to change the StatusBar theme from APP component. Now, we simply pass a data via props to Navbar, then Navbar share the props to StatusBar.
We can easily say that, there is no use of the props in Navbar Component. Navbar component become the middleware between the APP and StatusBar.

But, if we use the Context API then, directly we can access a state/data without any help of middleware.

usage: Current authenticated user, UI, preferred language etc.

#### Adding a context:

1. We need to create a separate file.
2. import React,{createContext,Component} from 'react'
3. export const ContextName = createContext()
4.
            class ContextProvider extends Component{
            state={}
            render()
            {
                return(
                        <ContextName.Provider value={{...this.state}}>
                            {this.props.children}
                        </ContextName.Provider>
                );
            }
            }

5. Call the components inside <ContextProvider> </ContextProvider> and the components can now access the contexts
6. Now in component file, we have to import {ThemeContext}, (always in destructuring format, this causes an error at first time).
7. In component file we have to write, static contextType = ThemeContext;
8. now we can easily access the whole context by writing this.context. (we can also access this.context.yourNamedValue, easy way to destructuring the context items)

In point number 7 we can access context by assigning tht context into the static variable contextType. But, there is an another way, this way we can access context by using Consumer.

#### why Consumer?

1. It can be used in functional component as well as class component, but the contextType is for only class based component.
2. We can use multiple context by using this(Consumer) type context access system.

\*\*\*in this project I used Consumer based context in Booklist.jsx and contextType based solution in myNavbar.jsx file.

In Consumer based context, we need to do these steps:

1.  <ThemeContext.Consumer>  </ThemeContext.Consumer>
2. Inside this a callback function need to be call, this callback function basically receives a context as a parameter.
3. All things are like previous.

4. Example:

                render() {
            return (
            <ThemeContext.Consumer>{(context)=>{

            const {isLightTheme,light,dark} = context;
            const theme = isLightTheme?light:dark;
                return(
                <div>
                <ListGroup >
                <ListGroupItem className={theme.bgsec} >হাজার বছর ধরে</ListGroupItem>
                </ListGroup>
            </div>
                )
            }}

            </ThemeContext.Consumer>
            );
            }


### toggle button function.

We can change the theme from customer side, i.e. client side can change the state of theme. This method can be implemented via different types. Here, I implement via a method called 'toggleTheme'

this method basically changes the state of ThemeContext.jsx. For simplicity I can define this procedure with JAVA ENCAPSULATION, where a private data can be accessed from a public method in that same file. Here, the same procedure happens.

toggleTheme method just update state via setState({value:!this.state.value}), the good practice is using parameterized setState((prevState,props)=>{return{value:!value}}), this is helpful for asynchronous operations.


then simply I pass the method with Provider, thus from any jsx file, we can easily run this method.

this is the provider value assigning:

        <ThemeContext.Provider value={{themeChange:this.toggleTheme,...this.state}}>
                    {this.props.children}
                </ThemeContext.Provider>

Here, first value is themeChange which is the key for the function this.toggleTheme, and the next value is state as we need to pass the state to various files for applying theme.



#### Why Consumer Again?
Basically, this question should look like this, 'What is the purpose of Multiple context, as Consumer is for topic?'

Well, if we had some auth data for the currently login user as well as theme, then we can't put the auth data in the same context that is used for theme. So, we have to create another Context and do some work based on auth. 

If we have one part of data then, a single context is really helpful, but if we have some other kind of data which also global for another part of the application, we need to create another Context for that.



### Consuming Multiple Contexts
Surround the all context (Consumer) with new one.





*******************************************************************
####                              HOOKS
*******************************************************************
Basically, Hooks are just special functions and they allow us to do things inside functional components that we'd only be able to do inside a class component.
Ex- using state. Previously we can access state only class component, but using the concept of Hooks we can easily implement states in functional component also.

useState() - use state within a functional component.
useeEffect() - run code when a component renders (or re-renders).
useContext() - consume context in a functional component.





*******************************************************************
####                         HOOKS & CONTEXT 
*******************************************************************

We can use 'useContext' in the jsx file, as a context holder by using the concepts of HOOKS.

First 'Booklist.jsx' I work with useContext. It's better to see th e code of that particular jsx file, then it can be much easier.
