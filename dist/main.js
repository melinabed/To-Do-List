(()=>{"use strict";const e=()=>{console.log("testing");let e=[];console.log("pushing something");let o="Default project";return e.push({projectTitle:o}),console.log(e),{projectArray:e,projectTitle:o}};let o=[];const t=(e,t,n,i,s)=>(console.log("creating to do now.."),console.log({title:e,description:t,dueDate:n,priority:i,listType:s}),console.log("pushing this object to the todoarray..."),o.push({title:e,description:t,dueDate:n,priority:i,listType:s}),console.log(o),{title:e,description:t,dueDate:n,priority:i,listType:s});e(),function(){const o=document.querySelector(".content"),t=document.createElement("h1");t.textContent="To-Do-List",o.appendChild(t);const n=document.createElement("div");n.textContent=e().projectTitle,o.appendChild(n)}();const n=t("Grocery Run","go get the groceries","6/11/2023","Low","Meat"),i=t("Homework","Biology","11/17/2023","Medium","something-else");console.log("show properties from index.js",n),console.log("show properties from index.js",i)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRU8sTUFBTUEsRUFBYyxLQUN2QkMsUUFBUUMsSUFBSSxXQUNaLElBQUlDLEVBQWUsR0FDbkJGLFFBQVFDLElBQUkscUJBQ1osSUFBSUUsRUFBZSxrQkFHbkIsT0FGQUQsRUFBYUUsS0FBSyxDQUFDRCxpQkFDbkJILFFBQVFDLElBQUlDLEdBQ0wsQ0FBQ0EsZUFBY0MsZUFBYSxFQ1J2QyxJQUFJRSxFQUFZLEdBRVQsTUFBTUMsRUFBYSxDQUFDQyxFQUFPQyxFQUFhQyxFQUFTQyxFQUFVQyxLQUM5RFgsUUFBUUMsSUFBSSx3QkFDWkQsUUFBUUMsSUFBSSxDQUFDTSxRQUFPQyxjQUFhQyxVQUFTQyxXQUFVQyxhQUNwRFgsUUFBUUMsSUFBSSwyQ0FJWkksRUFBVUQsS0FBSyxDQUFDRyxRQUFPQyxjQUFhQyxVQUFTQyxXQUFVQyxhQUN2RFgsUUFBUUMsSUFBSUksR0FDTCxDQUFDRSxRQUFPQyxjQUFhQyxVQUFTQyxXQUFVQyxhQ05uRFosSUNKTyxXQUdILE1BQU1hLEVBQWFDLFNBQVNDLGNBQWMsWUFDcENDLEVBQVVGLFNBQVNHLGNBQWMsTUFDdkNELEVBQVFFLFlBQWMsYUFDdEJMLEVBQVdNLFlBQVlILEdBR3ZCLE1BQU1JLEVBQWNOLFNBQVNHLGNBQWMsT0FDM0NHLEVBQVlGLFlBQWNsQixJQUFjSSxhQUN4Q1MsRUFBV00sWUFBWUMsRUFDM0IsQ0RMQUMsR0FJQSxNQUFNQyxFQUFTZixFQUFXLGNBQWUsdUJBQXdCLFlBQWEsTUFBTyxRQUMvRWdCLEVBQVVoQixFQUFXLFdBQVksVUFBVyxhQUFjLFNBQVUsa0JBQzFFTixRQUFRQyxJQUFJLGdDQUFpQ29CLEdBQzdDckIsUUFBUUMsSUFBSSxnQ0FBaUNxQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0TG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYmxhbmsgcHJqZWN0IGFycmF5IGxpc3RcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nJyk7XG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKCdwdXNoaW5nIHNvbWV0aGluZycpO1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSAnRGVmYXVsdCBwcm9qZWN0JztcbiAgICBwcm9qZWN0QXJyYXkucHVzaCh7cHJvamVjdFRpdGxlfSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICByZXR1cm4ge3Byb2plY3RBcnJheSwgcHJvamVjdFRpdGxlfTtcbn0iLCIvL0NyZWF0aW5nIGFuIGFycmF5IGZvciB0aGUgVG9Eb1xubGV0IHRvRG9BcnJheSA9IFtdO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsaXN0VHlwZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyB0byBkbyBub3cuLicpO1xuICAgIGNvbnNvbGUubG9nKHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsaXN0VHlwZX0pO1xuICAgIGNvbnNvbGUubG9nKCdwdXNoaW5nIHRoaXMgb2JqZWN0IHRvIHRoZSB0b2RvYXJyYXkuLi4nKTtcblxuICAgIC8vVE9ETzogcmVtb3ZlIGxpbmVzIGNvZGUgaWYgbm90IG5lZWRlZFxuXG4gICAgdG9Eb0FycmF5LnB1c2goe3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxpc3RUeXBlfSk7XG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5KTtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxpc3RUeXBlfTtcbiAgICBcbn0iLCIvL2ltcG9ydCBzZXBlcmF0ZSBtb2R1bGVzXG5pbXBvcnQgeyBwcm9qZWN0TG9hZCB9IGZyb20gXCIuL3Byb2plY3RMb2FkXCI7XG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWxMb2FkXCI7XG5pbXBvcnQgeyBjcmVhdGVUb0RvIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG4vL0NhbGwgdGhlIHByb2plY3QgbG9hZCBvbiBmaXJzdCBsYW5kXG5wcm9qZWN0TG9hZCgpO1xuXG4vL0NhbGwgRE9NIG1hbmlwdWxhdGlvbiB0byBjb250cm9sIFVJXG5pbml0aWFsTG9hZCgpO1xuXG4vL0Z1dHVyZSBjbGljayBldmVudHMgZm9yIHByb2plY3QgY3JlYXRpb25cblxuY29uc3QgbXlUb0RvID0gY3JlYXRlVG9EbyhcIkdyb2NlcnkgUnVuXCIsIFwiZ28gZ2V0IHRoZSBncm9jZXJpZXNcIiwgXCI2LzExLzIwMjNcIiwgXCJMb3dcIiwgXCJNZWF0XCIpO1xuY29uc3QgbXlUb0RvMiA9IGNyZWF0ZVRvRG8oXCJIb21ld29ya1wiLCBcIkJpb2xvZ3lcIiwgXCIxMS8xNy8yMDIzXCIsIFwiTWVkaXVtXCIsIFwic29tZXRoaW5nLWVsc2VcIik7XG5jb25zb2xlLmxvZyhcInNob3cgcHJvcGVydGllcyBmcm9tIGluZGV4LmpzXCIsIG15VG9Ebyk7XG5jb25zb2xlLmxvZyhcInNob3cgcHJvcGVydGllcyBmcm9tIGluZGV4LmpzXCIsIG15VG9EbzIpO1xuIiwiaW1wb3J0IHsgcHJvamVjdExvYWQgfSBmcm9tIFwiLi9wcm9qZWN0TG9hZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG5cbiAgICAvL0RPTSBmb3IgaGVhZGluZ1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvLURvLUxpc3RcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy9ET00gZm9yIHRoZSBkZWZhdWx0IHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJbmZvLnRleHRDb250ZW50ID0gcHJvamVjdExvYWQoKS5wcm9qZWN0VGl0bGU7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG59XG5cbiJdLCJuYW1lcyI6WyJwcm9qZWN0TG9hZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0QXJyYXkiLCJwcm9qZWN0VGl0bGUiLCJwdXNoIiwidG9Eb0FycmF5IiwiY3JlYXRlVG9EbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJsaXN0VHlwZSIsImNvbnRlbnREaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkaW5nIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0SW5mbyIsImluaXRpYWxMb2FkIiwibXlUb0RvIiwibXlUb0RvMiJdLCJzb3VyY2VSb290IjoiIn0=