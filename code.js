function Menu(nameMenu){
switch(nameMenu){
    case "main":move="";break;
    case "option_1":move="../../";break;
    case "option_2": move="../../../";break;
}
            document.write(`<div class="menu-box">
            <a href="${move}index.html" title="Back to Main">
                <p class="menu-first">Main</p>
            </a>
            
            <div class="menu-first">
                <details>
                    <summary>Robotics</summary>
                    <ul class="menu-second">
                        <a href="${move}robotics/micromouse/index.html">
                            <li>Micromouse</li>
                        </a>
                        <a href="${move}robotics/donkey_cars/index.html">
                            <li>Donkye Cars</li>
                        </a>
                        <a href="${move}robotics/cnc/index.html">
                            <li>3 Axis CNC</li>
                        </a>
                        <a href="${move}robotics/robotic_arm/index.html">
                            <li>Robotic Arm (3 DOF)</li>
                        </a>
                    </ul>
                </details>
                <details>
                    <summary>NASA Space Apss Challenges</summary>
                    <ul class="menu-second">
                        <a href="${move}nasa_space/2023/index.html">
                            <li>2023-Fire Management</li>
                        </a>
                        <a href="${move}nasa_space/2024/index.html">
                            <li>2024-Smart Agriculture</li>
                        </a>
                        <a href="${move}nasa_space/2025/index.html">
                            <li>2025-Air Quality Monitoring</li>
                        </a>
                    </ul>
                </details>

                <details>
                    <summary>Others</summary>
                    <ul class="menu-second">
                        <a href="${move}others/condenser/index.html">
                            <li>Air Humidity Condenser</li>
                        </a>
                        <a href="${move}others/electronic_fuse/index.html">
                            <li>Analog Electronic Fuse</li>
                        </a>
                        <a href="${move}others/smart_house/index.html">
                            <li>Smart House Model</li>
                        </a>
                        <a href="${move}others/conveyor_belt/index.html">
                            <li>Color-Sorting Conveyor belt</li>
                        </a>
                        <a href="${move}others/rgb_led_controller/index.html">
                            <li>RGB_Led_Controller</li>
                        </a>
                    </ul>
                </details>
            </div>
        </div>`);
    }