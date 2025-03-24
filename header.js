const template = document.createElement('template');
template.innerHTML=
`
<nav>
    <table style="width: 100%;">
        <tr class="header">
            <th style="width:3%"><a href="index.html"><img src="https://u.cubeupload.com/3055team/logosub.png" style="width: 100%;height: 100%;"></a></th>
            <th style="width: 72%"></th>
            <th style="width: 7%;">
                <div class="dropdown">
                    <button class="dropbtn">sections</button>
                    <div class="dropdown-content">
                        <table>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable"><a href="index.html" style="color: white;">Home</a></td>
                            </tr>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable"><a href="accounts.html" style="color: white;">Accounts</a></td>
                            </tr>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable"><a href="projects.html" style="color: white">Projects</a></td>
                            </tr>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable"><a href="testing.html" style="color: white">Testing</a></td>
                            </tr>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable">filler</td>
                            </tr>
                            <tr style="border-bottom: 1px black;">
                                <td class="droptable">filler</td>
                                
                            </tr>
                        </table>
                    </div>                         
                </div>
            </th>
            <th style="width: 7%;"><h>Main</h></th>
            <th style="width: 7%;"><h>test</h></th>
        </tr>
    </table>
</nav>
`
document.body.appendChild(template.content);
