<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD HTML 4.01//EN" doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
    <!-- Root node -->
    <xsl:template match="/portfolio">
        <title>
            <xsl:value-of select="name"/>
            <xsl:text>'s Portfolio</xsl:text>
        </title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="style.css" type="text/css"/>
        <div class="w3-black">
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
                <xsl:for-each select="section">
                    <div class="w3-padding-64 w3-content w3-text-grey" id="{@type}">
                        <h2 class="w3-text-light-grey">
                            <xsl:value-of select="@type"/>
                        </h2>
                        <hr style="width:200px" class="w3-opacity"/>
                        <xsl:apply-templates select="*"/>
                    </div>
                </xsl:for-each>
                <!-- Footer -->
                <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
                    <xsl:if test="social/linkedin">
                        <a target="_blank" href="https://www.linkedin.com/in/{social/linkedin}">
                            <i title="LinkedIn" class="fa fa-linkedin w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/facebook">
                        <a target="_blank" href="https://www.facebook.com/{social/facebook}">
                            <i title="Facebook" class="fa fa-facebook w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/instagram">
                        <a target="_blank" href="https://www.instagram.com/{social/instagram}">
                            <i title="Instagram" class="fa fa-instagram w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/youtube">
                        <a target="_blank" href="https://www.youtube.com/channel/{social/youtube}">
                            <i title="Youtube" class="fa fa-youtube w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/twitch">
                        <a target="_blank" href="https://www.twitch.tv/{social/twitch}">
                            <i title="Twitch" class="fa fa-twitch w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/twitter">
                        <a target="_blank" href="https://twitter.com/{social/twitter}">
                            <i title="Twitter" class="fa fa-twitter w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/stackoverflow">
                        <a target="_blank" href="https://stackoverflow.com/users/{social/stackoverflow}">
                            <i title="Stack Overflow" class="fa fa-stack-overflow w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/github">
                        <a target="_blank" href="https://github.com/{social/github}">
                            <i title="GitHub" class="fa fa-github w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:if test="social/pinterest">
                        <a target="_blank" href="https://pinterest.com/{social/pinterest}/">
                            <i title="Pinteres" class="fa fa-pinterest w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:if>
                    <xsl:for-each select="social/link">
                        <a target="_blank" href="{@url}">
                            <i title="{.}" class="fa fa-link w3-hover-opacity"/>
                        </a>
                        <xsl:text>&#160;</xsl:text>
                    </xsl:for-each>
                    <p class="w3-medium">
                        <xsl:text>Powered by </xsl:text>
                        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a>
                    </p>
                    <!-- End footer -->
                </footer>
                <!-- END PAGE CONTENT -->
            </div>
        </div>
    </xsl:template>
    <!-- Experience -->
    <xsl:template match="/portfolio/section/experience">
        <div class="w3-padding-16">
            <h3 class="w3-text-light-grey inline">
                <xsl:apply-templates select="title/text"/>
            </h3>
            <xsl:text> at </xsl:text>
            <span class="w3-text-light-grey">
                <xsl:apply-templates select="company"/>
            </span>
            <xsl:if test="not(end)">
                <xsl:text> (current)</xsl:text>
            </xsl:if>
            <p>
                <xsl:value-of select="start"/>
                <xsl:text> - </xsl:text>
                <xsl:choose>
                    <xsl:when test="end">
                        <xsl:value-of select="end"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:text>Present</xsl:text>
                    </xsl:otherwise>
                </xsl:choose>
                <xsl:text>, in </xsl:text>
                <xsl:apply-templates select="location/text"/>
            </p>
            <p>
                <xsl:apply-templates select="description/text"/>
            </p>
        </div>
    </xsl:template>
    <!-- Education -->
    <xsl:template match="/portfolio/section/education">
        <div class="w3-padding-16">
            <h3 class="w3-text-light-grey inline">
                <xsl:apply-templates select="field/text"/>
            </h3>
            <xsl:text> at </xsl:text>
            <span class="w3-text-light-grey">
                <xsl:apply-templates select="school"/>
            </span>
            <xsl:if test="not(end)">
                <xsl:text> (current)</xsl:text>
            </xsl:if>
            <p>
                <xsl:value-of select="start"/>
                <xsl:text> - </xsl:text>
                <xsl:choose>
                    <xsl:when test="end">
                        <xsl:value-of select="end"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:text>Present</xsl:text>
                    </xsl:otherwise>
                </xsl:choose>
            </p>
        </div>
    </xsl:template>
    <!-- Skills -->
    <xsl:template match="/portfolio/section/skill">
        <div class="w3-padding-16 indented">
            <span class="w3-text-light-grey">
                <xsl:apply-templates select="field/text"/>
            </span>
            <xsl:text>&#160;</xsl:text>
            <xsl:apply-templates select="description/text"/>
        </div>
    </xsl:template>
    <!-- Projects -->
    <xsl:template match="/portfolio/section/project">
        <p>Placeholder</p>
    </xsl:template>
    <!-- Company -->
    <xsl:template match="//*[self::company or self::school]">
        <xsl:choose>
            <xsl:when test="@url">
                <a href="{@url}">
                    <xsl:apply-templates select="text"/>
                </a>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates select="text"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <!-- Localized text -->
    <xsl:template match="//text">
        <xsl:if test="@lang = 'en'">
            <xsl:value-of select="."/>
        </xsl:if>
    </xsl:template>
</xsl:transform>