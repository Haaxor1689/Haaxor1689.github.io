<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
    <xsl:template match="/portfolio">
        <html>
            <title>My Portfolio</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="style.css" type="text/css"/>
            <body class="w3-black">
                <!-- Icon Bar (Sidebar - hidden on small screens) -->
                <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
                        <i class="fa fa-home w3-xxlarge"></i>
                        <p>Home</p>
                    </a>
                    <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-black">
                        <i class="fa fa-user w3-xxlarge"></i>
                        <p>About</p>
                    </a>
                    <xsl:for-each select="./section">
                        <a href="#{@type}" class="w3-bar-item w3-button w3-padding-large w3-black">
                            <!-- <i class="fa fa-home w3-xxlarge"></i> -->
                            <p>
                                <xsl:value-of select="@type"/>
                            </p>
                        </a>
                    </xsl:for-each>
                </nav>
                <!-- Navbar on small screens (Hidden on medium and large screens) -->
                <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                    <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                        <!-- TODO: Set width of each element according to count of elemts -->
                        <a href="#" class="w3-bar-item w3-button" style="width:25% !important">Home</a>
                        <a href="#about" class="w3-bar-item w3-button" style="width:25% !important">About</a>
                        <xsl:for-each select="./section">
                            <a href="#{@type}" class="w3-bar-item w3-button" style="width:25% !important">
                                <xsl:value-of select="@type"/>
                            </a>
                        </xsl:for-each>
                    </div>
                </div>
                <!-- Page Content -->
                <div class="w3-padding-large" id="main">
                    <!-- Header/Home -->
                    <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                        <h1 class="w3-jumbo">
                            <xsl:value-of select="name"/>
                        </h1>
                        <p>
                            <xsl:apply-templates select="headline/text"/>
                        </p>
                    </header>
                    <!-- About Section -->
                    <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
                        <h2 class="w3-text-light-grey">Summary</h2>
                        <hr style="width:200px" class="w3-opacity"/>
                        <p>
                            <xsl:apply-templates select="summary/text"/>
                        </p>
                    </div>
                    <!-- Sections -->
                    <xsl:for-each select="./section">
                        <div class="w3-padding-64 w3-content w3-text-grey" id="{@type}">
                            <h2 class="w3-text-light-grey">
                                <xsl:value-of select="@type"/>
                            </h2>
                            <hr style="width:200px" class="w3-opacity"/>
                            <xsl:apply-templates select="./*"/>
                        </div>
                    </xsl:for-each>
                    <!-- END PAGE CONTENT -->
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="/portfolio/section/experience">
        <p>Placeholder</p>
    </xsl:template>
    <xsl:template match="/portfolio/section/education">
        <p>Placeholder</p>
    </xsl:template>
    <xsl:template match="/portfolio/section/skill">
        <div class="w3-padding-16 indented">
            <span class="w3-text-light-grey">
                <xsl:apply-templates select="field/text"/>
            </span>
            <xsl:text>&#160;</xsl:text>
            <xsl:apply-templates select="description/text"/>
        </div>
    </xsl:template>
    <xsl:template match="/portfolio/section/project">
        <p>Placeholder</p>
    </xsl:template>
    <!-- Localized text -->
    <xsl:template match="//text">
        <xsl:if test="@lang = 'en'">
            <xsl:value-of select="."/>
        </xsl:if>
    </xsl:template>
</xsl:transform>